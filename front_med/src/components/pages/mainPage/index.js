import React, { Component } from 'react'

export default class MainPage extends Component {
    
    state = {
        currentDoctor: '',
        isDoctor: false,
        isActive: false,
    }

    renderDoctors = doctors => doctors.map((doctor, i) => (
        <li key={i} className="custom-option-item" data-selected={i}>
            {`${doctor.firstName} ${doctor.lastName}, ${doctor.score.toFixed(1)} `}
        </li>
    ));

    changeDoctor = e => {
        this.setState({isDoctor: true})
        this.props.onChangeDoctor();
    }

    changeDepart = e => {
        this.props.onChangeDepart();
    }
    render() {

        const {data} = this.props;
        const {isDoctor, isActive} = this.state;
        const {doctors} = data;
        if(!data) return true;

        return (
            <div className="main">
					<div className="patient-col">
					<div className="patient-title">
						Гинекологическое отделение
					</div>
				<div className="patient-row">
					<label htmlFor="">Врач</label>
						<div className="custom-select">
						<ul className="custom-option"  style={{display: 'none'}}>
							<div onClick={this.changeDoctor}>{this.renderDoctors(doctors)}</div>
						</ul>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<div className="patient-row">
					<label htmlFor="">Отделение</label>
										<div className="custom-select">
						<ul className="custom-option" style={{display: 'none'}}>
                            <div onClick={this.changeDepart}>
    							<li className="custom-option-item" data-selected="0">Гинекологическое отделение</li>
                            </div>
						</ul>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<div className="patient-row">
					<label htmlFor="">Спецализация</label>
										<div className="custom-select">
						<ul className="custom-option"  style={{display: 'none'}}>
							<li className="custom-option-item" data-selected="0">Гинеколог-Эндокринолог</li>
						</ul>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
                <div className="patient-row">
					<label htmlFor="">Рейтинг</label>
                    <div>{isDoctor && doctors[0].score}</div>
				</div>
				<div className="patient-row">
					<label htmlFor="">Стаж</label>
                    <div>{isDoctor && doctors[0].experience}</div>
				</div>

			</div>
        <div className="rating-block" style={{marginTop: 80, display: !isDoctor && 'none'}}>
		<div className="rating-row">
			<label htmlFor="">рейтинг 2</label>
			<div className="rating-info">
				<div className="fast-info">
					<div className="fast-info__fio">ФИО,</div>
					<div className="fast-info__inclusion">Диагноз,</div>
					<div className="fast-info__reason">Причина</div>
				</div>
				<div className="drop-down-ico"  onClick={() => this.setState({isActive: !isActive})}>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</div>
				{/* <div className="drop-down-menu"> */}
				<div style={{display: !isActive && 'none'}}>
					<div className="drop-down-menu-content">
						<div className="drop-down-menu-left">
							<div className="patient-row">
								<label>Тип приема</label>
								<input type="text" value="первичный"/>
							</div>
							<div className="patient-row">
								<label>Дата приема</label>
								<input type="text" value="01.06.2019"/>
							</div>
							<div className="patient-row">
								<label>Жалобы</label>
								<input type="text" value="Боль внизу живота"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Нарушение МЦ (10 дн.)"/>
							</div>
							<div className="patient-row">
								<label>Назначение</label>
								<input type="text" value="Утомлемость"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Прогестерон (норма)"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value=" Эстраген (выше нормы)"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Отсутствие фолликул"/>
							</div>
							<div className="patient-row">
								<label>
									Результаты анализов / исследований
								</label>
								<input type="text" value="КОК"/>
							</div>
							<div className="patient-row">
								<label>Окончательный диагноз</label>
								<input className="patient-result" type="text" value="Дисфункция яичников"/>
							</div>
						</div>
                        <div className="drop-down-menu-right">
							<div className="patient-row">
								<label>Тип приема</label>
								<input type="text" value="вторичный"/>
							</div>
							<div className="patient-row">
								<label>Дата приема</label>
								<input type="text" value="22.06.2019"/>
							</div>
							<div className="patient-row">
								<label>Жалобы</label>
								<input type="text" value="Боль внизу живота"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Нарушение МЦ (10 дн.)"/>
							</div>
							<div className="patient-row">
								<label>Назначение</label>
								<input type="text" value="Утомлемость"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Прогестерон (норма)"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value=" Эстраген (выше нормы)"/>
							</div>
							<div className="patient-row">
								<label></label>
								<input type="text" value="Отсутствие фолликул"/>
							</div>
							<div className="patient-row">
								<label>
									Результаты анализов / исследований
								</label>
								<input type="text" value="КОК"/>
							</div>
							<div className="patient-row">
								<label>Окончательный диагноз</label>
								<input className="patient-result" type="text" value="Гиперэстрагения"/>
							</div>
							<div className="footer-info">Причина неудовлетворительной оценки: некорректный диагноз.

						</div>
						</div>
					</div>
			</div>
				</div>
			</div>
		</div>
	</div>
        )
    }
}