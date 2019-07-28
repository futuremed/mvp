import React, { Component } from 'react'

export default class MainPage extends Component {

    render() {
        return (
            <div class="main">
					<div class="patient-col">
					<div class="patient-title">
						Гинекологическое отделение
					</div>
				<div class="patient-row">
					<label for="">Врач</label>
										<div class="custom-select">
						<ul class="custom-option"  style={{display: 'none'}}>
							<li class="custom-option-item" data-selected="0">VIP</li>
							<li class="custom-option-item" data-selected="1">Лояльный</li>
							<li class="custom-option-item" data-selected="2">поятоянный</li>
						</ul>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<div class="patient-row">
					<label for="">Отделение</label>
										<div class="custom-select">
						<ul class="custom-option" style={{display: 'none'}}>
							<li class="custom-option-item" data-selected="0">VIP</li>
							<li class="custom-option-item" data-selected="1">Лояльный</li>
							<li class="custom-option-item" data-selected="2">поятоянный</li>
						</ul>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<div class="patient-row">
					<label for="">Спецализация</label>
										<div class="custom-select">
						<ul class="custom-option"  style={{display: 'none'}}>
							<li class="custom-option-item" data-selected="0">VIP</li>
							<li class="custom-option-item" data-selected="1">Лояльный</li>
							<li class="custom-option-item" data-selected="2">поятоянный</li>
						</ul>
							<i class="fa fa-angle-down" aria-hidden="true"></i>
					</div>
				</div>
				<div class="patient-row">
					<label for="">Стаж</label>
					<input type="text"/></div>
				<div class="patient-row">
					<label for="">Рейтинг</label>
					<input type="text"/></div>
			</div>
	    </div>
        )
    }
}