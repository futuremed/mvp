import React, { Component } from 'react'

export default class DoctorPage extends Component {

    render() {
        return (
            <div className="body">
                Doctor Page
            </div>
        )
    }
}
/*
{
  "time": Long,
  "doctor": {
    id: Long,
    firstName: String,
    lastName: String,
    sex: SexType
  },
  patient: {
    id: Long,
    firstName: String,
    lastName: String,
    sex: SexType,
    age: Int
  },
  conclusionCode: Int,
  complaints: Set[  Int]
}
*/