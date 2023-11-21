import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:clinica_hospitalar/screens/schedule.dart';
import 'package:clinica_hospitalar/screens/record.dart';
import 'package:flutter/material.dart';

class Appointment extends StatefulWidget {
  const Appointment({super.key});

  @override
  _AppointmentState createState() => _AppointmentState();
}

class _AppointmentState extends State<Appointment> {
  final int index = 0;

  @override
  Widget build(BuildContext context) {

    //final appointments = {...Appointments.fromMap(value)};

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
                          padding: const EdgeInsets.all(16),
                          child: GestureDetector(
                            onTap: () {
                              Navigator.of(context).push(
                                MaterialPageRoute(builder: (context) => const Record()),
                              );
                            },
                            child: const Row(
                              children: [
                                Expanded(child: Text("Doutor 1", style: pStyle)),
                                Expanded(child: Text("Concluído", style: pStyle)),
                                Expanded(child: Text("00/00/0000 00:00", style: pStyle)),
                              ],
                            ),
                          ),
                        ),

                        /*
                        ListView.builder(
                          itemCount: appointments,
                          itemBuilder: (context, index) => Appointment(appointments.values.elementAt(index)),
                            );
                          },
                        ),
                        */


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
                      MaterialPageRoute(builder: (context) => const Schedule()),
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