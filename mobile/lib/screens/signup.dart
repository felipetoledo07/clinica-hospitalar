import 'dart:convert';
import 'dart:async';
import 'dart:io';
import 'package:intl/intl.dart';
import 'package:clinica_hospitalar/screens/login.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Signup extends StatefulWidget {
  const Signup({super.key});

  @override
  _SignupState createState() => _SignupState();
}

class _SignupState extends State<Signup> {


  void createPatient() async {

    var body = {
        'firstname': firstname,
        'lastname': lastname,
        'cpf': cpf,
        'password': password,
        'birth_date': DateFormat('yyyy-MM-dd').format(birth_date),
        'address': address
    };


    var response = await http.post(
      Uri.parse("http://10.0.2.2:3000/patients"), 
      headers: <String, String>{
        'Content-Type': 'application/json',
      },
      body: json.encode(body)
      );

  }

  String cpf = '';
  String password = '';
  String firstname = '';
  String lastname= '';
  DateTime birth_date= DateTime.now();
  String address = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(255, 255, 255, 1.0),
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
      body: SingleChildScrollView (
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Padding(
            padding: const EdgeInsets.all(14.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  margin: const EdgeInsets.all(20),
                  child: const Text(
                    "Sign Up",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 32,
                      color: Color.fromRGBO(43, 54, 116, 1.0),
                    ),
                  )
                ),
                Container(
                  margin: const EdgeInsets.all(20),
                  child: const Text("Insira os dados para cadastrar",
                    style: TextStyle(
                      fontSize: 15,
                      color: Color(0xffA3AED0),
                    ),
                  )
                ),
                Container(height: 10,),
                TextField(
                  onChanged: (text) {
                    firstname = text;
                  },
                  decoration: InputDecoration(
                    labelText: 'Nome',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(45),
                    ),
                  ),
                ),
                Container(height: 15,),
                TextField(
                  onChanged: (text) {
                    lastname = text;
                  },
                  decoration: InputDecoration(
                    labelText: 'Sobrenome',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(45),
                    ),
                  ),
                ),
                Container(height: 10,),
                Padding(
                  padding: const EdgeInsets.only(left: 12.0),
                  child: Container(
                    alignment: Alignment.centerLeft,
                    child: const Text(
                      'Data de Nascimento',
                      style: TextStyle(
                        color: Color(0xff616161),
                        fontSize: 15.75,
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 12.0),
                  child: Container(
                    alignment: Alignment.centerLeft,
                    child: ElevatedButton.icon(
                      onPressed: () {
                        showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime(1900),
                          lastDate: DateTime.now(),
                        ).then((date) {
                          if (date != null) {
                            setState(() {
                              birth_date = date;
                            });
                          }
                        });
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
                Container(height: 10,),
                TextField(
                  onChanged: (text) {
                    address = text;
                  },
                  decoration: InputDecoration(
                    labelText: 'Endereço',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(45),
                    ),
                  ),
                ),
                Container(height: 15,),
                TextField(
                  onChanged: (text) {
                    cpf = text;
                  },
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: 'CPF',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(45),
                    ),
                  ),
                ),
                Container(height: 15,),
                TextField(
                  onChanged: (text) {
                    password = text;
                  },
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Senha',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(45),
                    ),
                  ),
                ),
                Container(height: 15,),
                Container(
                  margin: const EdgeInsets.all(2.0),
                  width: MediaQuery.of(context).size.width,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xff344fff),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(18.0),
                      ),
                    ),
                    onPressed: () {
                      createPatient();
                      Navigator.of(context).pushReplacement(
                         MaterialPageRoute(builder: (context) => const Login()),
                       );
                    },
                    child: const Text(
                      "Cadastrar",
                    ),
                  ),
                ),
                Container(height: 10,),
                RichText(
                  text: TextSpan(
                    children: [
                      const TextSpan(
                        text: "Já está cadastrado?",
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                          color: Color.fromRGBO(43, 54, 116, 1.0),
                        ),
                      ),
                      TextSpan(
                        text: " Entre na Conta",
                        style: const TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w900,
                          color: Color.fromRGBO(52, 79, 255, 1.0),
                        ),
                        recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.of(context).push(
                            MaterialPageRoute(builder: (context) => const Login()),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}