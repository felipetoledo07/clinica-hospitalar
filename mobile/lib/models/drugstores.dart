class Drugstores {
  final int? id;
  final String? name;
  final String? cnpj;
  final String? password;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  Drugstores({
    this.id,
    this.name,
    this.cnpj,
    this.password,
    this.createdAt,
    this.updatedAt,
  });

  Drugstores.fromMap(Map<String, dynamic> map): id = map["id"], name = map["name"], cnpj = map["cnpj"], password = map["password"], createdAt = map["createdAt"], updatedAt = map["updatedAt"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "name": name,
      "cnpj": cnpj,
      "password": password,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
    };
  }
}