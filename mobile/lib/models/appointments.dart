import 'package:clinica_hospitalar/models/doctors.dart';
import 'package:clinica_hospitalar/models/patients.dart';
import 'package:clinica_hospitalar/models/statuses.dart';

class Appointments {
  final int? id;
  final DateTime? datetime;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final Doctors? DoctorId;
  final Patients? PatientId;
  final Statuses? StatusId;

  Appointments({
    this.id,
    this.datetime,
    this.createdAt,
    this.updatedAt,
    this.DoctorId,
    this.PatientId,
    this.StatusId,
  });

  Appointments.fromMap(Map<String, dynamic> map): 
    id = map["id"], 
    datetime = map["datetime"], 
    createdAt = map["createdAt"], 
    updatedAt = map["updatedAt"], 
    DoctorId = map["DoctorId"], 
    PatientId = map["PatientId"], 
    StatusId = map["StatusId"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "datetime": datetime,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
      "DoctorId": DoctorId,
      "PatientId": PatientId,
      "StatusId": StatusId,
    };
  }
}

