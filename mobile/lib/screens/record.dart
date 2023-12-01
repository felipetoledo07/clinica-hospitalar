import 'dart:convert';
import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Record extends StatefulWidget {

  var patientId;
  var appointmentId;

  Record (var patientId, var appointmentId) {
    this.patientId = patientId;
    this.appointmentId = appointmentId;
  }

  @override
  _RecordState createState() => _RecordState(patientId, appointmentId);

}

class _RecordState extends State<Record> {

  var patientId;
  var appointmentId;
  
  _RecordState (var patientId, var appointmentId) {
    this.patientId = patientId;
    this.appointmentId = appointmentId;
  }

  
  List<dynamic> appointment = [];

  Future<void> getAppointment() async {

    var response = await http.get(
      Uri.parse("http://10.0.2.2:3000/appointments/done/" + appointmentId.toString()),
    );
    
    setState(() {
      appointment = json.decode(response.body);
    });
  }

  @override
  void initState() {
    super.initState();
    getAppointment();
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

    if(appointment.isEmpty) {
      return Scaffold();
    } else {

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
          children: [
            Expanded(
              child: Container(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "Histórico",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 24,
                        color: Color.fromRGBO(43, 54, 116, 1.0),
                      ),
                    ),
                    Container(height: 16),
                    Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Column(
                        children: [
                          Container(
                            alignment: Alignment.topLeft,
                            padding: const EdgeInsets.all(16.0),
                            child: Text(
                              // "teste",
                              appointment[0]['doctorName'],
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 18,
                                color: Color.fromRGBO(43, 54, 116, 1.0),
                              ),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.all(16),
                            child: Row(
                              children: [
                                SizedBox(
                                  width: 60,
                                  child: Text("ID", style: h1Style),
                                ),
                                SizedBox(
                                  width: 130,
                                  child: Text("STATUS", style: h1Style),
                                ),
                                SizedBox(
                                  child: Text("DATA", style: h1Style),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.all(16),
                            child: Row(
                              children: [
                                SizedBox(
                                  width: 60,
                                  child: Text(appointment[0]['AppointmentId'].toString(), style: pStyle),
                                ),
                                SizedBox(
                                  width: 130,
                                  child: Text(appointment[0]['description'], style: pStyle),
                                ),
                                SizedBox(
                                  child: Text(appointment[0]['datetime'].substring(0, 10), style: pStyle),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            margin: const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 8),
                            padding: const EdgeInsets.only(top: 8),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(20),
                              boxShadow: [
                                BoxShadow(
                                  color: const Color(0xff7090B0).withOpacity(0.12),
                                  spreadRadius: 0,
                                  blurRadius: 40,
                                  offset: const Offset(0, 18),
                                ),
                              ],
                            ),
                            child: Column(
                              children: [
                                Container(
                                  margin: const EdgeInsets.only(top: 8, left: 16, right: 16, bottom: 8),
                                  alignment: Alignment.topLeft,
                                  child: const Text(
                                    "Receita",
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16,
                                      color: Color.fromRGBO(43, 54, 116, 1.0),
                                    ),
                                  ),
                                ),
                                Container(
                                  padding: const EdgeInsets.all(16),
                                  child: Row(
                                    children: [
                                      SizedBox(
                                        child: Text(
                                          appointment[0]['recipeDescription'], 
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Color(0xffA3AED0),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            margin: const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 8),
                            padding: const EdgeInsets.only(top: 8),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(20),
                              boxShadow: [
                                BoxShadow(
                                  color: const Color(0xff7090B0).withOpacity(0.12),
                                  spreadRadius: 0,
                                  blurRadius: 40,
                                  offset: const Offset(0, 18),
                                ),
                              ],
                            ),
                            child: Column(
                              children: [
                                Container(
                                  margin: const EdgeInsets.only(top: 8, left: 16, right: 16, bottom: 8),
                                  alignment: Alignment.topLeft,
                                  child: const Text(
                                    "Atestado",
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16,
                                      color: Color.fromRGBO(43, 54, 116, 1.0),
                                    ),
                                  ),
                                ),
                                Container(
                                  padding: const EdgeInsets.all(16),
                                  child: Row(
                                    children: [
                                      SizedBox(
                                        child: Text(
                                          appointment[0]['certificateDescription'], 
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Color(0xffA3AED0),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Container(
                                  margin: const EdgeInsets.only(top: 8, left: 16, right: 16, bottom: 8),
                                  alignment: Alignment.bottomRight,
                                  child: Text(
                                    "Suspensão até " + appointment[0]['suspention'],
                                    style: TextStyle(
                                      fontWeight: FontWeight.w500,
                                      fontSize: 14,
                                      color: Color.fromRGBO(43, 54, 116, 1.0),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              child: Align(
                alignment: Alignment.bottomRight,
                child: Container(
                  margin: const EdgeInsets.all(14.0),
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xffA3AED0),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(13)
                      )
                    ),
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (context) => Appointment(patientId)),
                      );
                    },
                    child: const Text(
                      "VOLTAR",
                      style: TextStyle(
                        color: Colors.white
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home, color: Color(0xff344fff)),
              label: '',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.medical_information, color: Colors.grey[600]),
              label: '',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person, color: Colors.grey[600]),
              label: '',
            ),
          ],
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
}
