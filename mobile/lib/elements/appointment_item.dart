import 'package:clinica_hospitalar/models/appointments.dart';
import 'package:flutter/material.dart';

class AppointmentItem extends StatelessWidget {
  
  late Appointments appointment;

  AppointmentItem(this.appointment, {super.key});

  @override
  Widget build(BuildContext context) {
    return const Row(
      children: [
        
        Text("Doutor 1"),
        Text("Concluído"),
        Text("00/00/0000 00:00"),

        /*
        Text(appointment.DoctorId as String),
        Text(appointment.StatusId as String),
        Text(appointment.datetime as String),
        */


      ],
    );
  }
}