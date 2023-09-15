import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';
const FacebookLoginButton = () => {
    const responseMessage = (response) => {
        console.log(response)
        axios.post('http://localhost:5000/api/auth/facebookLogin', { token: response.accessToken })
            .then(response => {
                // Handle the successful response here
                console.log(response.data);
                alert('login successful')
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Registration failed:', error.response);
            });
    }
    const errorMessage = (error) => {
        console.log(error)
    }

    return (
        <FacebookLogin
            appId="781196147027457"
            onSuccess={responseMessage}
            onFail={errorMessage}
        // onProfileSuccess={(response) => {
        //     console.log('Get Profile Success!', response);
        // }}
        // render={({ onClick, logout }) => (
        //     <CustomComponent onClick={onClick} onLogoutClick={logout} />
        // )}
        />

    )
}
export default FacebookLoginButton;