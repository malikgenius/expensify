import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';
import { SingleDatePicker } from 'react-dates';
import FileUploader from 'react-firebase-file-uploader';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// const now = moment();
//         console.log(now.format('hh:mma'))

export class AddExpenseForm extends Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            uid: this.props.uid,
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note: '',
            amount:props.expense ? props.expense.amount: '',
            createdAt: moment(),
            focused: false,
            error: '',
            imageURL: props.expense ? props.expense.imageURL: '',
            isUploading: false,
            progress: 0,
            avatarURL:'',
            avatar: ''
    }
    
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        // https://regex101.com/
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
        
    }
    onNoteChanged = (e) => {
        // const note = e.target.value;
        // below is e.persist() .. replacement of const note = e.target.value, but please use const note kind of solution only. 
        e.persist();
        this.setState(() => ({ note: e.target.value }))
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
        
    }
    onFocusChanged = ({focused}) => {
        this.setState(() => ({ focused }))
    }

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
      this.setState({isUploading: false});
    }
    // handle upload images to Firebase .. 
    handleUploadSuccess = (filename) => {
        this.setState({avatar: filename, progress: 100, isUploading: false});
        firebase.storage().ref(`images/${this.state.uid}`).child(filename).getDownloadURL()
          .then(url => this.setState({imageURL: url}))
          // .then(this.setState({formValues: this.state.imageURL}))
          
          // .then(() => console.log(formValues))
        // console.log(this.state.avatarURL, "IMAGE STATE AFTER UPLOAD",this.state.formValue[img])
      };
      showImage = () => {
          return (
              // eslint-disable-next-line
            <a  href={this.state.imageURL} target="_blank"></a>
          );
          
      }
      deleteImage = () => {
          const imageURL = this.state.imageURL;
        //   const avatar = this.state.avatar;
          const storage = firebase.storage();
          storage.ref().child(`${imageURL}`).delete()
          .then(() => {
            //   console.log(`${avatar} with firebase link ${imageURL} is deleted`)
          }).catch((e) => {
            //   console.log(e)
          })
      }
    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please add Description & Amount'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note,
                //DD-MM-YY ddd hh-mma  it doesnt work with filters :( will add all this when displaying.
                createdAt: this.state.createdAt.valueOf(),
                imageURL: this.state.imageURL
            })
        }
    }

    render() {
        // console.log(this.state.uid)
        return(
            
            <form className="form" onSubmit={this.onFormSubmit}>
                {!this.state.description || !this.state.amount ? <p className="form__error">{this.state.error}</p> : ''}
                <input 
                    className="text-input"
                    type="text" autoFocus placeholder="description here"
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
                />
                
                <input 
                    className="text-input"
                    type="text" placeholder="amount"
                    onChange={this.onAmountChange}
                    value={this.state.amount}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChanged}
                    numberOfMonths={1}
                    isOutsideRange={((day) => false)}
                />
                <textarea 
                    className="text-area"
                    placeholder="Add a note for your expense (optional)"
                    onChange={this.onNoteChanged}
                >
                </textarea>
                <div >
                    {this.state.isUploading && <p>Uploading {this.state.progress} %</p>}
                <label className="imageupload">
                    {this.state.isUploading ? 'Uploading ..' : 'Image Upload'}
                    <FileUploader 
                        hidden
                        accept="image/*"
                        // name="img"
                        randomizeFilename={false}
                        storageRef={firebase.storage().ref(`images/${this.state.uid}`)}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </label>
                <div>
                    {/* avatar file name display on screen */}
                    
                    {this.state.imageURL ? <a href={this.state.imageURL} target="_blank"><img alt="" className="uploaded-image" onClick={this.showImage} src={this.state.imageURL}/></a>: ''}
                </div>
                
                </div>
                <div>
                    {!this.state.isUploading ? <button 
                        className="button">Save Expense
                    </button> : <button disabled
                        className="button">Save Expense
                    </button> }
                     

                </div>
            </form>
        
        )
    }
};

const mapStateToProps = (state) => ({
    uid: state.auth.uid
})

export default connect(mapStateToProps)(AddExpenseForm)