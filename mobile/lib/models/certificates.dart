import 'package:clinica_hospitalar/models/appointments.dart';

class Certificates {
  final int? id;
  final String? description;
  final DateTime? suspention;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final Appointments? AppointmentId;

  Certificates({
    this.id,
    this.description,
    this.suspention,
    this.createdAt,
    this.updatedAt,
    this.AppointmentId,
  });

  Certificates.fromMap(Map<String, dynamic> map): id = map["id"], description = map["description"], suspention = map["suspention"], createdAt = map["createdAt"], updatedAt = map["updatedAt"], AppointmentId = map["AppointmentId"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "description": description,
      "availability": suspention,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "AppointmentId": AppointmentId,
    };
  }
}