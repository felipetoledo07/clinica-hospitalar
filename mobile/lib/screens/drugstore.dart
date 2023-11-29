import 'dart:convert';

import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Drugstore extends StatefulWidget {

  var patientId;

  Drugstore(var patientId) {
    this.patientId = patientId;
  }

  @override
  _DrugstoreState createState() => _DrugstoreState(patientId);
}

class _DrugstoreState extends State<Drugstore> {

  var patientId;

  _DrugstoreState(var patientId) {
    this.patientId = patientId;
  }

   List<dynamic> drugstores = [];

  Future<void> getDrugstores() async {
    // var response = await http.get(Uri.parse("http://10.0.2.2:3000/drugstores"));
    var response = await http.get(Uri.parse("http://10.0.2.2:3000/drugstores"));
    setState(() {
      drugstores = json.decode(response.body);
    });
    
  }

  @override
  void initState() {
    super.initState();
    getDrugstores();
  }


  final int index = 1;

  final h1Style = const TextStyle(
    fontWeight: FontWeight.w500,
    fontSize: 16,
    color: Color(0xffA3AED0),
  );

  final pStyle = const TextStyle(
    fontSize: 14,
    color: Color(0xff2B3674),
  );

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
        children: [
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title
                  const Text(
                    "Farmácias",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 24,
                      color: Color.fromRGBO(43, 54, 116, 1.0),
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Appointments Container
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Column(
                      children: [
                        // Appointments Header
                        Container(
                          padding: const EdgeInsets.all(16),
                          child: Row(
                            children: [
                              Expanded(child: Text("ID", style: h1Style)),
                              Expanded(child: Text("PHARMACY", style: h1Style,)),
                            ],
                          ),
                        ),
                        Container(
                          height: MediaQuery.of(context).size.height * 0.5,
                          child: ListView.builder(
                            itemCount: drugstores.length,
                            itemBuilder: (_, index) {
                              return Container(
                                padding: const EdgeInsets.all(16),
                                child: Row(
                                  children: [
                                    Expanded(child: Text(drugstores[index]["id"].toString(), style: pStyle)),
                                    Expanded(child: Text(drugstores[index]['name'], style: pStyle)),
                                  ],
                                ),
                              );
                            }
                          ),
                        )
                        
                      ],
                    ),
                  ),
                ],
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