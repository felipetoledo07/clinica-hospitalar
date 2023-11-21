import 'package:flutter/material.dart';

class ScheduleDoctors extends StatefulWidget {
  const ScheduleDoctors({super.key});

  @override
  _ScheduleDoctorsState createState() => _ScheduleDoctorsState();
}

class _ScheduleDoctorsState extends State<ScheduleDoctors> {
  String selectedValue = 'Doctor 1';

  List<String> items = [
    'Doctor 1',
    'Doctor 2',
    'Doctor 3',
    'Doctor 4',
    'Doctor 5',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
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
        onChanged: (String? newValue) {
          setState(() {
            selectedValue = newValue!;
          });
        },
        items: items.map<DropdownMenuItem<String>>((String value) {
          return DropdownMenuItem<String>(
            value: value,
            child: Text(value),
            );
        }).toList(),
      ),
    );
  }
}