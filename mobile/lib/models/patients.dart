class Patients {
  final int? id;
  final String? firstname;
  final String? lastname;
  final String? cpf;
  final String? password;
  final DateTime? birth_date;
  final String? address;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  Patients({
    this.id,
    this.firstname,
    this.lastname,
    this.cpf,
    this.password,
    this.birth_date,
    this.address,
    this.createdAt,
    this.updatedAt,
  });

  Patients.fromMap(Map<String, dynamic> map): id = map["id"], firstname = map["firstname"], lastname = map["lastname"], cpf = map["cpf"], password = map["password"], birth_date = map["birth_date"], address = map["address"], createdAt = map["createdAt"], updatedAt = map["updatedAt"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "firstname": firstname,
      "lastname": lastname,
      "cpf": cpf,
      "password": password,
      "birth_date": birth_date,
      "address": address,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
    };
  }
}