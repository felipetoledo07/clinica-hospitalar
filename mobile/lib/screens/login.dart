import 'dart:convert';

import 'package:clinica_hospitalar/screens/appointment.dart';
import 'package:clinica_hospitalar/screens/signup.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {

  void login() async {

    var body = {
        'cpf': cpf,
        'password': password,
    };

    var response = await http.post(
      // Uri.parse("http://10.0.2.2:3000/patients/login"), 
      Uri.parse("http://10.0.2.2:3000/patients/login"), 
      headers: <String, String>{
        'Content-Type': 'application/json',
      },
      body: json.encode(body));

    
    
    var patientId = json.decode(response.body)['id'];
    

    if (response.statusCode == 200) {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => Appointment(patientId)),
      );
    }
  }

  String cpf = '';
  String password = '';

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
                  child: const Text("Sign In",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 32,
                      color: Color.fromRGBO(43, 54, 116, 1.0),
                    ),
                  )
                ),
                Container(
                  margin: const EdgeInsets.all(20),
                  child: const Text("Insira seu CPF e senha para prosseguir",
                    style: TextStyle(
                      fontSize: 15,
                      color: Color(0xffA3AED0),
                    ),
                  )
                ),
                Container(height: 10,),
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
                Container(height: 20,),
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
                      login();
                    },
                    child: const Text(
                      "Entrar",
                      style: TextStyle(
                        color: Colors.white
                      ),
                    ),
                  ),
                ),
                Container(height: 10,),
                RichText(
                  text: TextSpan(
                    children: [
                      const TextSpan(
                        text: "Não está cadastrado?",
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                          color: Color.fromRGBO(43, 54, 116, 1.0),
                        ),
                      ),
                      TextSpan(
                        text: " Crie uma Conta",
                        style: const TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w900,
                          color: Color.fromRGBO(52, 79, 255, 1.0),
                        ),
                        recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.of(context).push(
                            MaterialPageRoute(builder: (context) => const Signup()),
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
