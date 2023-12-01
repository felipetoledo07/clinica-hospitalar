import 'dart:convert';
import 'dart:io';

import 'package:clinica_hospitalar/elements/scheduleDoctors.dart';
import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

class Schedule extends StatefulWidget {

  var patientId;

  Schedule(var patientId) {
    this.patientId = patientId;
  }

  @override
  _ScheduleState createState() => _ScheduleState(patientId);
}

class _ScheduleState extends State<Schedule> {

  var patientId;

  _ScheduleState(var patientId) {
    this.patientId = patientId;
  }

  String selectedValue = '';
  
  List<dynamic> listOfDoctors = [];

  Future<void> getDoctorId() async {

    var queryParams = {
      "doctorName": selectedValue
    };

    final headers = {HttpHeaders.contentTypeHeader: 'application/json'};
    var response = await http.get(
        Uri.http("10.0.2.2:3000", "/doctors/name", queryParams),
        headers: headers
    );

    setState(() {
      doctorId = json.decode(response.body)[0]['id'];
    });

  }

  Future<void> getDoctors() async {
    // var response = await http.get(Uri.parse("http://10.0.2.2:3000/doctors"));
    var response = await http.get(Uri.parse("http://10.0.2.2:3000/doctors"));
    setState(() {
      listOfDoctors = json.decode(response.body);
      selectedValue = json.decode(response.body)[0]["firstname"] + " " + json.decode(response.body)[0]["lastname"];
      timeController.text = "00:00";
    });
    getDoctorId();
  }

  @override
  void initState() {
    super.initState();
    getDoctors();
  }

  TextEditingController timeController = TextEditingController();
  DateTime  datetime =  DateTime.now();
  int doctorId = 1;
  // int patientIdBody = 1;
  int statusId = 3;

  Future<void> createAppointment() async {

      var body = {
        "description": "Consulta",
        "datetime": DateFormat('yyyy-MM-dd').format(datetime) + " " + timeController.text + ":00",
        "DoctorId": doctorId,
        "PatientId": patientId,
        "StatusId": statusId,
      };

      var response = await http.post(
        Uri.parse("http://10.0.2.2:3000/appointments"),
        headers: <String, String>{
          'Content-Type': 'application/json',
        },
        body: json.encode(body)
      );
  }
  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(244, 247, 254, 1.0),
      appBar: AppBar(
        title: GestureDetector(
          onTap: () {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(builder: (context) => const Login()),
            );
          },
          child: RichText(
            text: const TextSpan(
              children: [
                TextSpan(
                  text: "CLÍNICA",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w900,
                    color: Color.fromRGBO(43, 54, 116, 1.0),
                  ),
                ),
                TextSpan(
                  text: " 123",
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.normal,
                    color: Color.fromRGBO(43, 54, 116, 1.0),
                  ),
                ),
              ],
            ),
          ),
        ),
        backgroundColor: Colors.white,
        elevation: 0.3,
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: SingleChildScrollView(
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height,
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "Home",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 24,
                        color: Color.fromRGBO(43, 54, 116, 1.0),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              "Doutor",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 18,
                                color: Color.fromRGBO(43, 54, 116, 1.0),
                              ),
                            ),
                            Container(
                              padding: const EdgeInsets.only(top: 16, bottom: 16),
                              child: Container(
                                width: 375,
                                height: 60,
                                alignment: Alignment.centerLeft,
                                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(50.0), // Set border radius here
                                  border: Border.all(color: const Color(0xffA3A3A3)),
                                ),
                                child: DropdownButton<String>(
                                  value: selectedValue,
                                  items: listOfDoctors.map((value) => 
                                    DropdownMenuItem<String>(
                                      value: value['firstname'] + " " + value['lastname'],
                                      child: Text(value['firstname'] + " " + value['lastname']),
                                    ))
                                    .toList(),
                                  onChanged: (String? newValue) {
                                    setState(() {
                                      selectedValue = newValue!;
                                    });
                                    getDoctorId();
                                  },
                                ),
                              ),
                            ),
                            const Text(
                              "Dia",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 18,
                                color: Color.fromRGBO(43, 54, 116, 1.0),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 16, bottom: 16),
                              child: Container(
                                alignment: Alignment.centerLeft,
                                child: ElevatedButton.icon(
                                  onPressed: () async {
                                    DateTime? selectedDate = await showDatePicker(
                                      context: context,
                                      initialDate: datetime,
                                      firstDate: DateTime(1900),
                                      lastDate: DateTime(2025),
                                    );

                                    if (selectedDate != null) {
                                      setState(() {
                                        datetime = DateTime(
                                          selectedDate.year,
                                          selectedDate.month,
                                          selectedDate.day,
                                          datetime.hour,
                                          datetime.minute,
                                        );
                                      });
                                    }
                                  },
                                  label: const Text('ˇ'),
                                  icon: const Icon(
                                    Icons.calendar_today,
                                    color: Colors.white,
                                  ),
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.grey[500],
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(13),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            const Text(
                              "Horário",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 18,
                                color: Color.fromRGBO(43, 54, 116, 1.0),
                              ),
                            ),
                            Container(
                              padding: const EdgeInsets.only(top: 16, bottom: 16),
                              alignment: Alignment.centerLeft,
                              child: TextFormField(
                                controller: timeController,
                                decoration: InputDecoration(
                                  prefixIcon: const Icon(Icons.access_time),
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(50),
                                  ),
                                ),
                                onTap: () async {
                                  TimeOfDay? selectedTime = await showTimePicker(
                                    context: context,
                                    initialTime: TimeOfDay.now(),
                                  );
                                  if (selectedTime != null) {
                                    setState(() {
                                      datetime = DateTime(
                                        datetime.year,
                                        datetime.month,
                                        datetime.day,
                                        selectedTime.hour,
                                        selectedTime.minute,
                                      );
                                      timeController.text =
                                          '${selectedTime.hour}:${selectedTime.minute}';
                                    });
                                  }
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.medical_information),
            label: '',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: '',
          ),
        ],
        selectedItemColor: const Color(0xff344fff),
        onTap: (index) {
          switch (index) {
            case 0:
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => Appointment(patientId)),
              );
              break;
            case 1:
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => Drugstore(patientId)),
              );
              break;
            case 2:
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => Doctor(patientId)),
              );
              break;
          }
        },
      ),
      persistentFooterButtons: [
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Align(
              alignment: Alignment.bottomRight,
              child: Container(
                margin: const EdgeInsets.only(top: 14.0, right: 8.0, bottom: 14.0),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xffEE5D50),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(13),
                    ),
                  ),
                  onPressed: () {
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => Appointment(patientId)),
                    );
                  },
                  child: const Text(
                    "CANCELAR",
                    style: TextStyle(
                      color: Colors.white
                    ),
                  ),
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Container(
                margin: const EdgeInsets.only(top: 14.0, right: 14.0, bottom: 14.0),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xff05CD99),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(13),
                    ),
                  ),
                  onPressed: () {
                    createAppointment(); 
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => Appointment(patientId)),
                    );
                  },
                  child: const Text(
                    "CRIAR",
                    style: TextStyle(
                      color: Colors.white
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
