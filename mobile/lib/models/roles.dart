class Roles {
  final int? id;
  final String? description;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  Roles({
    this.id,
    this.description,
    this.createdAt,
    this.updatedAt,
  });

  Roles.fromMap(Map<String, dynamic> map): id = map["id"], description = map["description"], createdAt = map["createdAt"], updatedAt = map["updatedAt"];

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "description": description,
      "createdAt": createdAt,
      "updatedAt": updatedAt,
    };
  }
}