import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css';
import { Navbar } from '../navbar';
const Dashboard = () => {
  const employeeList = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Supervisor' },
    { id: 3, name: 'Michael Johnson', position: 'Employee' },
  ];
  const appointments = [
    { id: 1, date: '2023-01-05', amount: 100 },
    { id: 2, date: '2023-02-10', amount: 200 },
    { id: 3, date: '2023-03-15', amount: 150 },
    // Add more appointments as needed
  ];

  const [selectedMonth, setSelectedMonth] = useState('');
  const [appointmentData, setAppointmentData] = useState([]);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    // Simulate fetching appointment data for the selected month
    // Replace this with your actual data fetching logic
    const appointments = [
      { month: 'January', appointments: 10 },
      { month: 'February', appointments: 15 },
      { month: 'March', appointments: 12 },
      { month: 'April', appointments: 18 },
      { month: 'May', appointments: 14 },
      { month: 'June', appointments: 20 },
    ];
    const selectedData = appointments.filter((data) => data.month === month);
    setAppointmentData(selectedData);
  };

  const monthlyAppointmentsData = [
    { month: 'January', appointments: 10 },
    { month: 'February', appointments: 15 },
    { month: 'March', appointments: 12 },
    { month: 'April', appointments: 18 },
    { month: 'May', appointments: 14 },
    { month: 'June', appointments: 20 },
  ];

  const monthlySalesData = [
    { month: 'January', sales: 200 },
    { month: 'February', sales: 350 },
    { month: 'March', sales: 280 },
    { month: 'April', sales: 400 },
    { month: 'May', sales: 320 },
    { month: 'June', sales: 500 },
  ];

  const getTotalAppointments = () => {
    return appointments.length;
  };

  const getMonthlyAppointments = (year, month) => {
    return appointments.filter(
      (appointment) =>
        new Date(appointment.date).getFullYear() === year &&
        new Date(appointment.date).getMonth() === month
    ).length;
  };

  const getYearlyAppointments = (year) => {
    return appointments.filter((appointment) => new Date(appointment.date).getFullYear() === year).length;
  };

  const getQuarterlyAppointments = (year, quarter) => {
    const startMonth = (quarter - 1) * 3;
    const endMonth = startMonth + 2;
    return appointments.filter(
      (appointment) =>
        new Date(appointment.date).getFullYear() === year &&
        new Date(appointment.date).getMonth() >= startMonth &&
        new Date(appointment.date).getMonth() <= endMonth
    ).length;
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentQuarter = Math.floor(currentMonth / 3) + 1;
  return (
    <div>
    <Navbar/>
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to the Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Number of Employees</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sale Statistics</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Yearly Appointments</th>
                  <th>Monthly Appointments</th>
                  <th>Quarterly Appointments</th>
                  <th>Total Appointments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{getYearlyAppointments(currentYear)}</td>
                  <td>{getMonthlyAppointments(currentYear, currentMonth)}</td>
                  <td>{getQuarterlyAppointments(currentYear, currentQuarter)}</td>
                  <td>{getTotalAppointments()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sales Statistics</h5>
            <div className="chart-container">
              <BarChart width={500} height={300} data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
              <LineChart width={500} height={300} data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Monthly Appointments</h5>
            <div className="calendar">
              {monthlyAppointmentsData.map((data) => (
                <div
                  key={data.month}
                  className={`month ${selectedMonth === data.month ? 'selected' : ''}`}
                  onClick={() => handleMonthClick(data.month)}
                >
                  {data.month}
                </div>
              ))}
            </div>
            {selectedMonth && (
              <div className="chart-container">
                <BarChart width={500} height={300} data={appointmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="appointments" fill="#8884d8" />
                </BarChart>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

