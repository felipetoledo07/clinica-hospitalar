import 'dart:convert';

import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:clinica_hospitalar/screens/schedule.dart';
import 'package:clinica_hospitalar/screens/record.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Appointment extends StatefulWidget {

  var patientId;
  
  Appointment(var patientId) {
    this.patientId = patientId;
  }

  @override
  _AppointmentState createState() => _AppointmentState(this.patientId);
}

class _AppointmentState extends State<Appointment> {
  
  var patientId;

  _AppointmentState(var patientId) {
    this.patientId = patientId;
  }


  final int index = 0;

  List<dynamic> appointments = [];

  Future<void> getAppointments() async {
    // var response = await http.get(Uri.parse("http://10.0.2.2:3000/appointments"));
    var response = await http.get(Uri.parse("http://10.0.2.2:3000/appointments/patientmobile/" + patientId.toString()));
    setState(() {
      appointments = json.decode(response.body);
    });
    
  }

  @override
  void initState() {
    super.initState();
    getAppointments();
  }

  @override
  Widget build(BuildContext context) {

  const h1Style = TextStyle(
    fontWeight: FontWeight.w500,
    fontSize: 16,
    color: Color(0xffA3AED0),
  );

  const pStyle = TextStyle(
    fontSize: 14,
    color: Color(0xff2B3674),
  );

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
      body: ListView(
        children: [
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title
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
                    child: Column(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(16),
                          child: const Row(
                            children: [
                              Expanded(child: Text("DOUTOR", style: h1Style)),
                              Expanded(child: Text("STATUS", style: h1Style)),
                              Expanded(child: Text("HORÁRIO", style: h1Style)),
                            ],
                          ),
                        ),
                        Container(
                          child: SizedBox(
                            height: MediaQuery.of(context).size.height * 0.5,
                            child: ListView.builder(
                              shrinkWrap: true,
                              itemCount: appointments.length,
                              itemBuilder: (_, index) {
                                if (appointments[index]["description"] == "Realizado") {
                                  return Container(
                                    padding: const EdgeInsets.all(16),
                                    child: GestureDetector(
                                      onTap: () {
                                        Navigator.of(context).push(
                                          MaterialPageRoute(builder: (context) => Record(patientId, appointments[index]['id'])),
                                        );
                                      },
                                      child: Row(
                                        children: [
                                          Expanded(child: Text(appointments[index]['doctorName'] ?? 'No Doctor', style: pStyle)),
                                          Expanded(child: Text(appointments[index]['description'] ?? 'No Status', style: pStyle)),
                                          Expanded(child: Text(appointments[index]['datetime'] ?? 'No Datetime', style: pStyle)),
                                        ],
                                      ),
                                    ),
                                  );
                                } else {
                                  return Container(
                                    padding: const EdgeInsets.all(16),
                                    child: GestureDetector(
                                      child: Row(
                                        children: [
                                          Expanded(child: Text(appointments[index]['doctorName'] ?? 'No Doctor', style: pStyle)),
                                          Expanded(child: Text(appointments[index]['description'] ?? 'No Status', style: pStyle)),
                                          Expanded(child: Text(appointments[index]['datetime'] ?? 'No Datetime', style: pStyle)),
                                        ],
                                      ),
                                    ),
                                  );
                                }
                              },
                            ),
                          )
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: Align(
              alignment: Alignment.bottomRight,
              child: Container(
                margin: const EdgeInsets.all(14.0),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xff344fff),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(13)
                    )
                  ),
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => Schedule(patientId)),
                    );
                  },
                  child: const Text(
                    "AGENDAR",
                  ),
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
    );
  }
}