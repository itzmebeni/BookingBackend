class Booking {
  final String serviceName;
  final String customerName;
  final String date;
  final String time;
  final String status;

  Booking({
    required this.serviceName,
    required this.customerName,
    required this.date,
    required this.time,
    required this.status,
  });

  factory Booking.fromJson(Map<String, dynamic> json) {
    return Booking(
      serviceName: json['serviceName'],
      customerName: json['customerName'],
      date: json['date'],
      time: json['time'],
      status: json['status'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'serviceName': serviceName,
      'customerName': customerName,
      'date': date,
      'time': time,
      'status': status,
    };
  }
}
