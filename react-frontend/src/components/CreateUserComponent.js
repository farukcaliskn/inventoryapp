import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            user_name: '',
            user_password: '',
            user_email: ''
        }
        this.changeuser_nameHandler = this.changeuser_nameHandler.bind(this);
        this.changeuser_passwordHandler = this.changeuser_passwordHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

       componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({
                    user_name: user.user_name,
                    user_password: user.user_password,
                    user_email : user.user_email
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {user_name: this.state.user_name, user_password: this.state.user_password, user_email: this.state.user_email};
        console.log('user => ' + JSON.stringify(user));

        if(this.state.id === '_add'){
             UserService.createUser(user).then(res =>{
                 this.props.history.push('/'); //burada kayıt olduktan sonra logine atacak
             });
         }else{
             UserService.updateUser(user, this.state.id).then( res => {
                 this.props.history.push('/');
             });
         }
    }
    
    changeuser_nameHandler= (event) => {
        this.setState({user_name: event.target.value});
    }

    changeuser_passwordHandler= (event) => {
        this.setState({user_password: event.target.value});
    }

    changeuser_emailHandler= (event) => {
        this.setState({user_email: event.target.value});
    }
    //Önceki sayfaya döner
    cancel(){
        this.props.history.push('/');
    }

   
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Kullanıcı Ekle</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Kullanıcı Adı </label>
                                            <input placeholder="Kullanıcı Adı" name="user_name" className="form-control" 
                                                value={this.state.user_name} onChange={this.changeuser_nameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Kullanıcı E-Mail </label>
                                            <input placeholder="ornek@gmail.com" type="email" name="user_email" className="form-control" 
                                                value={this.state.user_email} onChange={this.changeuser_emailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Kullanıcı Şifresi </label>
                                            <input placeholder="Şifre Belirle" type="password" name="user_password" className="form-control" 
                                                value={this.state.user_password} onChange={this.changeuser_passwordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Kaydet</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Çık</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent
