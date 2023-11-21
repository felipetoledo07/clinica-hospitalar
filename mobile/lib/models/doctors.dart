import 'package:clinica_hospitalar/models/roles.dart';

class Doctors {
  final int? id;
  final String? firstname;
  final String? lastname;
  final String? cpf;
  final String? password;
  final String? medical_license;
  final String? openning_hours;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final Roles? RoleId;

  Doctors({
    this.id,
    this.firstname,
    this.lastname,
    this.cpf,
    this.password,
    this.medical_license,
    this.openning_hours,
    this.createdAt,
    this.updatedAt,
    this.RoleId,
  });

  Doctors.fromMap(Map<String, dynamic> map): id = map["id"], firstname = map["firstname"], lastname = map["lastname"], cpf = map["cpf"], password = map["password"], medical_license = map["medical_license"], openning_hours = map["openning_hours"], createdAt = map["createdAt"], updatedAt = map["updatedAt"], RoleId = map["RoleId"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "firstname": firstname,
      "lastname": lastname,
      "cpf": cpf,
      "password": password,
      "medical_license": medical_license,
      "openning_hours": openning_hours,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "RoleId": RoleId,
    };
  }
}