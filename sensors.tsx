const sensors = [
    {
        id: 'sensor_001',
        deviceType: 'coolant_temperature',
        deviceName: 'Coolant Temperature',
        ipAddress: '192.168.1.101',
        port: 80,
        location: '',
        status: 'active',
        wallpaper: '',
        lastReading: {
            value: 22.5,
            timestamp: '2024-10-01T12:34:56Z',
        },
    },
    {
        id: 'sensor_002',
        deviceType: 'brake_sensor',
        deviceName: 'Brake Temperature Sensor',
        ipAddress: '192.168.1.102',
        port: 80,
        location: '',
        status: 'active',
        wallpaper: '',
        lastReading: {
            value: 55.0,
            timestamp: '2024-10-01T12:34:56Z',
        },
    },
    {
        id: 'sensor_003',
        deviceType: 'battery_voltage',
        deviceName: 'Battery Voltage',
        ipAddress: '192.168.1.102',
        port: 80,
        location: '',
        status: 'not_active',
        wallpaper: '',
        lastReading: {
            value: 55.0,
            timestamp: '2024-10-01T12:34:56Z',
        },
    },
    {
        id: 'sensor_004',
        deviceType: 'inclinometer',
        deviceName: 'Inclinometer',
        ipAddress: '192.168.1.102',
        port: 80,
        location: '',
        status: 'active',
        wallpaper: '',
        lastReading: {
            value: 55.0,
            timestamp: '2024-10-01T12:34:56Z',
        },
    },
];

export { sensors };
