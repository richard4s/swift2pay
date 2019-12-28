
const grabber = (userId) => {
 fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
 method: 'GET',
})

}

export default grabber;