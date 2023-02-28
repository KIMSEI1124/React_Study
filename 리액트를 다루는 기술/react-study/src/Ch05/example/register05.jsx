import React, { Component } from 'react';

class Register05 extends Component {
  state = {
    id: '',
    pw: '',
    social0: '',
    social1: '',
    tel0: '',
    tel1: '',
    tel2: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  input = React.createRef();

  onClick = () => {
    alert(
      `아이디: ${this.state.id}\n비밀번호: ${this.state.pw}\n주민번호: ${this.state.social0} - ${this.state.social1}\n전화번호: ${this.state.tel0} - ${this.state.tel1} - ${this.state.tel2}`,
    );
    this.setState({
      id: '',
      pw: '',
      social0: '',
      social1: '',
      tel0: '',
      tel1: '',
      tel2: '',
    });
  };
  render() {
    return (
      <div>
        <center>
          <h1>회원 가입</h1>
        </center>
        <table border="1" align="center">
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="id" placeholder="아이디" value={this.state.id} onChange={this.onChange} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pw" placeholder="비밀번호" value={this.state.pw} onChange={this.onChange} />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                type="text"
                name="social0"
                placeholder="앞자리6자리"
                value={this.state.social0}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="social1"
                placeholder="뒷자리7자리"
                value={this.state.social1}
                onChange={this.onChange}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input type="text" name="tel0" placeholder="3자리" value={this.state.tel0} onChange={this.onChange} />
              -
              <input type="text" name="tel1" placeholder="4자리" value={this.state.tel1} onChange={this.onChange} />
              -
              <input type="text" name="tel2" placeholder="4자리" value={this.state.tel2} onChange={this.onChange} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="submit" onClick={this.onClick}>
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Register05;
