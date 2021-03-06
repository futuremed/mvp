import React, { Component } from 'react';
import './doctor.css'

export default class DoctorPage extends Component {

    state = {
      complaints: [],
    
    }

    addComplaint = index => this.setState({complaints: [...this.state.complaints, '']});

    renderComplaints = complaints => complaints.map( (item, i) => (
      <div key={i}>
        <div style={{display: 'flex'}}>
          <div>жалобы</div> 
          <input type="text"/>
          {complaints.length - 1 === i && <div onClick={() => this.addComplaint(i)}>+</div>}  
        </div> 
      </div>
    ))
    changeField = (field, item) => this.setState({[field]: item.target.value});

    saveInfo = (e) => {
      const body = {
        time: new Date().getMilliseconds(),
        doctor: {
          id: 2,
          firstName: 'Иван',
          lastName: 'Иванов',
          sex: 'male',
        },
        patient: {
          id: 7,
          firstName: 'Вася',
          lastName:  'Папунки',
          sex: 'male',
          age: 123,
        },
        conclusionCode: 24,
        complaints: [1, 2, 3],
        recommendations: [2001],

      }
      this.props.services.postAppointment(body);
    }

    render() {
        const {complaints} =  this.state;
        console.log(this.state);

        return (
            <div className="container full-w">
          <div className="main">
            <div className="patient">
              <div className="patient-left-col">
                <div className="patient-row">
                  <label htmlFor="">Пациент</label>
                  <input type="text" onChange={(item) => this.changeField('nameClient', item)}/></div>
                <div className="patient-row">
                  <label htmlFor="">Дата рождения</label>
                  <input type="text" onChange={(item) => this.changeField('birthday', item)}/></div>
                <div className="patient-row">
                  <label htmlFor="">Дата первичного приема</label>
                  <input type="text" onChange={(item) => this.changeField('dateFirstVisit', item)}/></div>
                <div className="patient-row">
                  <label htmlFor="">Дата повторного приема</label>
                  <input type="text" onChange={(item) => this.changeField('dateLastVisit', item)}/></div>
                <div className="patient-row">
                  <label htmlFor="">Результаты осмотра</label>
                  <textarea 
                    name="" id="" cols="30" rows="10"
                    onChange={(item) => this.changeField('resultSea', item)} 
                    value='аллергия на белок'

                  ></textarea></div>
                <div className="patient-row">
                  <label htmlFor="">Результаты  опроса</label>
                  <textarea name="" id="" cols="30" rows="10"
                    onChange={(item) => this.changeField('result', item)}
                    value='боль при пальпации отсутствует'
                    
                  ></textarea></div>
              </div>
              <div className="patient-right-col">
                <div className="patient-row">
                  <label htmlFor="">Тип приема</label>
                  <div className="custom-select">
                    <ul className="custom-option" style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="0">Болезнь</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Жалобы</label>
                  <div className="custom-select">
                    <ul className="custom-option" style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="1">утомляемость</li>
                      <li className="custom-option-item" data-selected="2">головная боль</li>
                      <li className="custom-option-item" data-selected="3">тянущая боль внизу живота</li>
                      <li className="custom-option-item" data-selected="4">повышенный аппетит</li>
                      <li className="custom-option-item" data-selected="5">нарушение чистоты кожных покровов</li>
                      <li className="custom-option-item" data-selected="6">слабость</li>
                      <li className="custom-option-item" data-selected="7">снижение концентрации</li>
                      <li className="custom-option-item" data-selected="8">сыпь</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Анализы (результаты)</label>
                  <div className="custom-select">
                    <ul className="custom-option"  style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="1">общий анализ крови - без патологий</li>
                      <li className="custom-option-item" data-selected="2">общий анализ мочи - без патологий</li>
                      <li className="custom-option-item" data-selected="3">Повышенный индекс массы тела</li>
                      <li className="custom-option-item" data-selected="4">Пониженный индекс массы тела</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Предварительный диагноз </label>
                  <div className="custom-select">
                    <ul className="custom-option"  style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="1">Нарушение цикла</li>
                      <li className="custom-option-item" data-selected="2">Метаболический синдром</li>
                      <li className="custom-option-item" data-selected="3">Гиперэстрогения</li>
                      <li className="custom-option-item" data-selected="4">Дипрессивный эпизод</li>
                      <li className="custom-option-item" data-selected="5">Дефицит Д3</li>
                      <li className="custom-option-item" data-selected="6">Ферритиновая анемия</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Окончательный диагноз </label>
                  <div className="custom-select">
                    <ul className="custom-option"  style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="1">Нарушение цикла</li>
                      <li className="custom-option-item" data-selected="2">Метаболический синдром</li>
                      <li className="custom-option-item" data-selected="3">Гиперэстрогения</li>
                      <li className="custom-option-item" data-selected="4">Дипрессивный эпизод</li>
                      <li className="custom-option-item" data-selected="5">Дефицит Д3</li>
                      <li className="custom-option-item" data-selected="6">Ферритиновая анемия</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Назначение</label>
                  <div className="custom-select">
                    <ul className="custom-option" style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="3">Ксенекал</li>
                      <li className="custom-option-item" data-selected="4">Сибутрамин</li>
                      <li className="custom-option-item" data-selected="5">Соблюдение пищевой диеты</li>
                      <li className="custom-option-item" data-selected="6">Умеренные физические нагрузки</li>
                      <li className="custom-option-item" data-selected="7">КОК (с повышенным содержанием прогестерона и дроспиренона)</li>
                    </ul>
                  </div>
                </div>
                <div className="patient-row">
                  <label htmlFor="">Рекомендации</label>
                  <div className="custom-select">
                    <ul className="custom-option"  style={{display: 'none'}}>
                      <li className="custom-option-item" data-selected="1">ЛФК</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer style={{width: '1440px'}}>
            <div className="footer-height">
              <div className="footer-container">
                <div className="circle-block">
                  <div className="big-circle">
                    <div className="mid-circle">
                      <div className="little-circle">
                        <div className="iAgree" style={{marginLeft: 110}}>
                          <input type="checkbox"/>
                          <label htmlFor="">Согласие на осмотр от пациента получено</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="save-btn"
                  onClick={this.saveInfo}
                >Сохранить</button>
              </div>
            </div>
          </footer>
        </div>
        )
    }
}