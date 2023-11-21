import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';

class Doctor extends StatefulWidget {
  const Doctor({super.key});

  @override
  _DoctorState createState() => _DoctorState();
}

class _DoctorState extends State<Doctor> {
  final int index = 2;

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
                    "Doutores",
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
                        Container(
                          padding: const EdgeInsets.all(16),
                          child: Row(
                            children: [
                              SizedBox(
                                width: 80,
                                child: Text("DOCTOR", style: h1Style),
                                ),
                              SizedBox(
                                width: 140,
                                child: Text("SPECIALIZATION", style: h1Style),
                                ),
                              SizedBox(
                                child: Text("OPEN HOURS", style: h1Style)
                                ),
                            ],
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.all(16),
                          child: Row(
                            children: [
                              SizedBox(
                                width: 80,
                                child: Text("Doctor 1", style: pStyle),
                                ),
                              SizedBox(
                                width: 140,
                                child: Text("Specialization 1", style: pStyle),
                                ),
                              SizedBox(
                                child: Text("00:00 - 08:00", style: pStyle),
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
                MaterialPageRoute(builder: (context) => const Appointment()),
              );
              break;
            case 1:
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const Drugstore()),
              );
              break;
            case 2:
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const Doctor()),
              );
              break;
          }
        },
      ),
    );
  }
}