
const grabber = fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+this.props.navigation.state.params.userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
 method: 'GET',
})

export default grabber;