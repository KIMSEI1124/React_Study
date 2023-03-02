import React, { Component } from 'react';

class Register051 extends Component {
  handlerKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'id') {
        this.input_pw.focus();
      } else if (e.target.name === 'pw') {
        this.input_social0.focus();
      } else if (e.target.name === 'social0') {
        this.input_social1.focus();
      } else if (e.target.name === 'social1') {
        this.input_tel0.focus();
      } else if (e.target.name === 'tel0') {
        this.input_tel1.focus();
      } else if (e.target.name === 'tel1') {
        this.input_tel2.focus();
      } else if (e.target.name === 'tel2') {
        this.input_btn.focus();
      }
    }
  };

  onClick = () => {
    alert(
      `아이디: ${this.input_id.value}\n비밀번호: ${this.input_pw.value}\n주민번호: ${this.input_social0.value} - ${this.input_social1.value}\n전화번호: ${this.input_tel0.value} - ${this.input_tel1.value} - ${this.input_tel2.value}`,
    );
    this.input_id.value = '';
    this.input_pw.value = '';
    this.input_social0.value = '';
    this.input_social1.value = '';
    this.input_tel0.value = '';
    this.input_tel1.value = '';
    this.input_tel2.value = '';
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
                ref={(ref) => {
                  this.input_id = ref;
                }}
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
                ref={(ref) => {
                  this.input_pw = ref;
                }}
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
                ref={(ref) => {
                  this.input_social0 = ref;
                }}
              />
              -
              <input
                type="text"
                name="social1"
                maxLength={7}
                placeholder="뒷자리7자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={(ref) => {
                  this.input_social1 = ref;
                }}
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
                ref={(ref) => {
                  this.input_tel0 = ref;
                }}
              />
              -
              <input
                type="text"
                name="tel1"
                maxLength={4}
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={(ref) => {
                  this.input_tel1 = ref;
                }}
              />
              -
              <input
                type="text"
                name="tel2"
                maxLength={4}
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handlerKeyPress}
                ref={(ref) => {
                  this.input_tel2 = ref;
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button
                type="submit"
                onClick={this.onClick}
                onKeyDown={this.handlerKeyPress}
                ref={(ref) => {
                  this.input_btn = ref;
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Register051;
