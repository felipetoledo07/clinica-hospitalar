import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';

class Drugstore extends StatefulWidget {
  const Drugstore({super.key});

  @override
  _DrugstoreState createState() => _DrugstoreState();
}

class _DrugstoreState extends State<Drugstore> {
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
                          padding: const EdgeInsets.all(16),
                          child: Row(
                            children: [
                              Expanded(child: Text("1", style: pStyle)),
                              Expanded(child: Text("Pharmacy 1", style: pStyle)),
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