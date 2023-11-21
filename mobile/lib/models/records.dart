import 'package:clinica_hospitalar/models/appointments.dart';

class Records {
  final int? id;
  final String? description;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final Appointments? AppointmentId;

  Records({
    this.id,
    this.description,
    this.createdAt,
    this.updatedAt,
    this.AppointmentId,
  });

  Records.fromMap(Map<String, dynamic> map): id = map["id"], description = map["description"], createdAt = map["createdAt"], updatedAt = map["updatedAt"], AppointmentId = map["AppointmentId"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "description": description,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "AppointmentId": AppointmentId,
    };
  }
}