export   function formateDate(date){
const formattedDate = new Date(date);
const options = {day:'2-digit',month:'short',year:'numeric'}
const result = formattedDate.toLocaleDateString('en-GB',options)
return result
}