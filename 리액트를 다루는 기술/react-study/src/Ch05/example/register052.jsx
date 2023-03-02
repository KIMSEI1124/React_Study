import React, { Component } from 'react';

class Register052 extends Component {
  input_id = React.createRef();
  input_pw = React.createRef();
  input_social0 = React.createRef();
  input_social1 = React.createRef();
  input_tel0 = React.createRef();
  input_tel1 = React.createRef();
  input_tel2 = React.createRef();
  input_btn = React.createRef();

  handlerKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'id') {
        this.input_pw.current.focus();
      } else if (e.target.name === 'pw') {
        this.input_social0.current.focus();
      } else if (e.target.name === 'social0') {
        this.input_social1.current.focus();
      } else if (e.target.name === 'social1') {
        this.input_tel0.current.focus();
      } else if (e.target.name === 'tel0') {
        this.input_tel1.current.focus();
      } else if (e.target.name === 'tel1') {
        this.input_tel2.current.focus();
      } else if (e.target.name === 'tel2') {
        this.input_btn.current.focus();
      }
    }
  };

  onClick = () => {
    alert(
      `아이디: ${this.input_id.current.value}\n비밀번호: ${this.input_pw.current.value}\n주민번호: ${this.input_social0.current.value} - ${this.input_social1.current.value}\n전화번호: ${this.input_tel0.current.value} - ${this.input_tel1.current.value} - ${this.input_tel2.current.value}`,
    );
    this.input_id.current.value = '';
    this.input_pw.current.value = '';
    this.input_social0.current.value = '';
    this.input_social1.current.value = '';
    this.input_tel0.current.value = '';
    this.input_tel1.current.value = '';
    this.input_tel2.current.value = '';
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
              <input
                type="text"
                name="id"
                placeholder="아이디"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_id}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="pw"
                placeholder="비밀번호"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_pw}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                type="text"
                name="social0"
                maxLength={6}
                placeholder="앞자리6자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_social0}
              />
              -
              <input
                type="text"
                name="social1"
                maxLength={7}
                placeholder="뒷자리7자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_social1}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="tel0"
                maxLength={3}
                placeholder="3자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_tel0}
              />
              -
              <input
                type="text"
                name="tel1"
                maxLength={4}
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_tel1}
              />
              -
              <input
                type="text"
                name="tel2"
                maxLength={4}
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={this.input_tel2}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="submit" onClick={this.onClick} onKeyDown={this.handlerKeyPress} ref={this.input_btn}>
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Register052;
