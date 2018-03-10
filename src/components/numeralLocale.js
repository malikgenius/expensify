import numeral from 'numeral';
// load a locale
export default numeral.register('locale', 'omr', {
    delimiters: {
        thousands: '',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: 'OMR'
    }
});

// switch between locales
numeral.locale('omr');