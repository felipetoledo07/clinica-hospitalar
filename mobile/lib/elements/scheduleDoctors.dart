// import 'dart:convert';

// import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http;

// class ScheduleDoctors extends StatefulWidget {
//   const ScheduleDoctors({super.key});

//   @override
//   _ScheduleDoctorsState createState() => _ScheduleDoctorsState();
// }

// class _ScheduleDoctorsState extends State<ScheduleDoctors> {
//   String selectedValue = '';
//   int selectedId = 1;

  
//   List<dynamic> listOfDoctors = [];

//   Future<void> getDoctors() async {
//     // var response = await http.get(Uri.parse("http://10.0.2.2:3000/doctors"));
//     var response = await http.get(Uri.parse("http://localhost:3000/doctors"));
//     setState(() {
//       listOfDoctors = json.decode(response.body);
//       selectedValue = json.decode(response.body)[0]["firstname"] + " " + json.decode(response.body)[0]["lastname"];
//     });

//   }

//   @override
//   void initState() {
//     super.initState();
//     getDoctors();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return 
//   }
// }