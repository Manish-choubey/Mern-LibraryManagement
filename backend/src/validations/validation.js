


const isValidObjectId1= function (value){
    const ObjectId = mongoose.Types.ObjectId
    return ObjectId.isValid(value)
}
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
};


const isValidDate = function(date) {
    if(typeof date != "string") return false
    return moment(date, 'YYYY-MM-DD', true).isValid()
}

const isValidRating = function(rating){
    if(rating < 1 || rating > 5){
        return false
    } return true
}



isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}


const validanumber = function (value) {
    if (/[6789]{1}[0-9]{9}/.test(value)) {
        return true
    } else {
        return false
    }
}

const isRightFormatISBN = function (ISBN) {
    return /^\+?([1-9]{3})\)?[-. ]?([0-9]{10})$/.test(ISBN);
}

const isValidObjectId = function (objectId) {
    return /^[0-9a-fA-F]{24}$/.test(objectId)
}

const isValidEmail = function (value)   {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) { return true }
    else return false
}

const isRightFormatReleasedAt = function (releasedAt) {
    return /((\d{4}[\/-])(\d{2}[\/-])(\d{2}))/.test(releasedAt)
}


module.exports={isValid,validanumber,isValidObjectId,isRightFormatReleasedAt,isValidEmail ,isRightFormatISBN,isRightFormatReleasedAt,isValidObjectId1,isValidRating,isValidDate,isValidRequestBody }