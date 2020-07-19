import moment from 'moment';

export const dateCoordinatesMixin = {
    created () {
        this.zoomLevels = [0, 1, 2, 3],
        this.TIME_SUB_SCALE = {
            0: 7,
            1: 30,
            2: 12,
            3: 10
        } 
    },
    methods: {
        moment: function () { 
            return moment() 
        },
        getMomentFromString(dateString) {
            return moment(dateString, 'YYYY-MM-DD');
        },
        getCurrentMoment: function() {
            return moment();
        },
        // converts a date to an x coordinate to map events to the timeline scale
        dateToCoordinates: function (startDate, eventDate, scale, scale_unit) {
            let startMoment = moment(startDate, "YYYY-MM-DD");
            let dateObj     = moment(eventDate, "YYYY-MM-DD");
            let count       = this.TIME_SUB_SCALE[scale_unit];
            switch(scale_unit) {
                case 0: {
                    let amount_of_days = dateObj.diff(startMoment, 'days');
                    let amount_of_weeks = amount_of_days / count;
                    let remainder_of_days = amount_of_days % count;
                    return (amount_of_weeks * scale) + (remainder_of_days * scale / count);
                }  
                case 1: {
                    let amount_of_days = dateObj.diff(startMoment, 'days');
                    return amount_of_days * (scale / count)
                    // TODO this must be updated when the months vary day count
                }
                case 2: {
                    let amount_of_months = dateObj.diff(startMoment, 'months');
                    return amount_of_months * (scale / count);
                }
                case 3: {
                    let amount_of_months = dateObj.diff(startMoment, 'months');
                    let years = Math.floor(amount_of_months / 12);
                    return years * (scale / count);
                }
                default:
                    return 0;
            }
        }
    }
}