import grabInfo from './grabInfo'

grabInfo(this.props.navigation.state.params.userId).then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Functional response: ' , user, json.message)
      });

const grabInfo = (userId) => {
 return fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
 method: 'GET',
})

}

export default grabInfo;