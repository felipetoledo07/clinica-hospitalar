import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';

class Record extends StatelessWidget {
  const Record ({super.key});

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
                          child: const Text(
                            "Doctor 1",
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
                                child: Text("1", style: pStyle),
                              ),
                              SizedBox(
                                width: 130,
                                child: Text("Concluído", style: pStyle),
                              ),
                              SizedBox(
                                child: Text("00/00/0000 00:00", style: pStyle),
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
                                child: const Row(
                                  children: [
                                    SizedBox(
                                      child: Text(
                                        "Descrição", 
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
                                child: const Text(
                                  "Disponível até 27/11/2023",
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
                                child: const Row(
                                  children: [
                                    SizedBox(
                                      child: Text(
                                        "Descrição", 
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
                                child: const Text(
                                  "Suspensão de 18.Dez.2023 até 07.Jan.2024",
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
                      MaterialPageRoute(builder: (context) => const Appointment()),
                    );
                  },
                  child: const Text(
                    "VOLTAR",
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