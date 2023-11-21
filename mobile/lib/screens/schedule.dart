import 'package:clinica_hospitalar/elements/scheduleDoctors.dart';
import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/doctor.dart';
import 'package:clinica_hospitalar/screens/drugstore.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/material.dart';

class Schedule extends StatefulWidget {
  const Schedule({super.key});

  @override
  _ScheduleState createState() => _ScheduleState();
}

class _ScheduleState extends State<Schedule> {
  DateTime datetime = DateTime.now();
  TextEditingController timeController = TextEditingController();

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
                              child: const ScheduleDoctors(),
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
                                      lastDate: DateTime.now(),
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
                                  icon: const Icon(Icons.calendar_today),
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
                      MaterialPageRoute(builder: (context) => const Appointment()),
                    );
                  },
                  child: const Text(
                    "CANCELAR",
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
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => const Appointment()),
                    );
                  },
                  child: const Text(
                    "CRIAR",
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