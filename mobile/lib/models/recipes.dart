import 'package:clinica_hospitalar/models/appointments.dart';
import 'package:clinica_hospitalar/models/drugstores.dart';

class Recipes {
  final int? id;
  final String? description;
  final bool? availability;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final Appointments? AppointmentId;
  final Drugstores? DrugstoreId;

  Recipes({
    this.id,
    this.description,
    this.availability,
    this.createdAt,
    this.updatedAt,
    this.AppointmentId,
    this.DrugstoreId,
  });

  Recipes.fromMap(Map<String, dynamic> map): id = map["id"], description = map["description"], availability = map["availability"], createdAt = map["createdAt"], updatedAt = map["updatedAt"], AppointmentId = map["AppointmentId"], DrugstoreId = map["DrugstoreId"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "description": description,
      "availability": availability,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "AppointmentId": AppointmentId,
      "DrugstoreId": DrugstoreId,
    };
  }
}