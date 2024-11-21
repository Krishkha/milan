const Stats = [
    { label: 'Assam', value: '1' },
    { label: 'Bihar', value: '2' },
    { label: 'Karnataka', value: '3' },
    { label: 'Gujarat', value: '4' },
    { label: 'Jharkhand', value: '5' },
];

const Cities = [
    { label: 'Guwahati', value: '1', state: 'Assam' },
    { label: 'Silchar', value: '2', state: 'Assam' },
    { label: 'Dibrugarh', value: '3', state: 'Assam' },
    { label: 'Patna', value: '4', state: 'Bihar' },
    { label: 'Gaya', value: '5', state: 'Bihar' },
    { label: 'Bhagalpur', value: '6', state: 'Bihar' },
    { label: 'Bengaluru', value: '7', state: 'Karnataka' },
    { label: 'Mysuru', value: '8', state: 'Karnataka' },
    { label: 'Hubballi', value: '9', state: 'Karnataka' },
    { label: 'Ahmedabad', value: '10', state: 'Gujarat' },
    { label: 'Surat', value: '11', state: 'Gujarat' },
    { label: 'Vadodara', value: '12', state: 'Gujarat' },
    { label: 'Ranchi', value: '13', state: 'Jharkhand' },
    { label: 'Jamshedpur', value: '14', state: 'Jharkhand' },
    { label: 'Dhanbad', value: '15', state: 'Jharkhand' },
];

const Communities = [
    { label: 'Community A', value: '1', state: 'Assam' },
    { label: 'Community B', value: '2', state: 'Assam' },
    { label: 'Community C', value: '3', state: 'Bihar' },
    { label: 'Community D', value: '4', state: 'Bihar' },
    { label: 'Community E', value: '5', state: 'Karnataka' },
    { label: 'Community F', value: '6', state: 'Karnataka' },
    { label: 'Community G', value: '7', state: 'Gujarat' },
    { label: 'Community H', value: '8', state: 'Gujarat' },
    { label: 'Community I', value: '9', state: 'Jharkhand' },
    { label: 'Community J', value: '10', state: 'Jharkhand' },
];

const MaritalStatus = [
    { label: 'Single', value: '1' },
    { label: 'Married', value: '2' },
    { label: 'Divorced', value: '3' },
    { label: 'Widowed', value: '4' },
    { label: 'Separated', value: '5' },
];

const Height = [
    { label: 'Below 4\'5"', value: '1' },
    { label: '4\'5" - 4\'9"', value: '2' },
    { label: '4\'9" - 5\'0"', value: '3' },
    { label: '5\'1" - 5\'3"', value: '4' },
    { label: '5\'4" - 5\'6"', value: '5' },
    { label: '5\'7" - 5\'9"', value: '6' },
    { label: '5\'10" - 6\'0"', value: '7' },
    { label: '6\'1" - 6\'3"', value: '8' },
    { label: 'Above 6\'3"', value: '9' },
];

const Diet = [
    { label: 'Vegetarian', value: '1' },
    { label: 'Non-Vegetarian', value: '2' },
    { label: 'Vegan', value: '3' },
    { label: 'Pescatarian', value: '4' },
    { label: 'Gluten-Free', value: '5' },
    { label: 'Other', value: '6' },
];

const HighestQualification = [
    { label: 'High School', value: '1' },
    { label: 'Associate Degree', value: '2' },
    { label: 'Bachelor\'s Degree', value: '3' },
    { label: 'Master\'s Degree', value: '4' },
    { label: 'Doctorate (PhD)', value: '5' },
    { label: 'Other', value: '6' },
];

const CollegeAttended = [
    { label: 'Harvard University', value: '1' },
    { label: 'Stanford University', value: '2' },
    { label: 'MIT', value: '3' },
    { label: 'UC Berkeley', value: '4' },
    { label: 'Oxford University', value: '5' },
    { label: 'Other', value: '6' },
];

const MobileNumberCountryCodes = [
    { label: '+91', value: '91' },
    { label: '+44', value: '44' },
    { label: '+61', value: '61' },
    { label: '+49', value: '49' },
    { label: '+33', value: '33' },
    { label: '+81', value: '81' },
    { label: '+7', value: '7' },
];

const AnnualIncome = [
    { label: 'Below ₹2,00,000', value: '1' },
    { label: '₹2,00,000 - ₹5,00,000', value: '2' },
    { label: '₹5,00,000 - ₹10,00,000', value: '3' },
    { label: '₹10,00,000 - ₹20,00,000', value: '4' },
    { label: '₹20,00,000 - ₹50,00,000', value: '5' },
    { label: '₹50,00,000 - ₹1,00,00,000', value: '6' },
    { label: 'Above ₹1,00,00,000', value: '7' },
];

const WorkWith = [
    { label: 'Government Sector', value: '1' },
    { label: 'Private Sector', value: '2' },
    { label: 'Self-Employed', value: '3' },
    { label: 'Freelancer', value: '4' },
    { label: 'Student', value: '5' },
    { label: 'Retired', value: '6' },
    { label: 'Other', value: '7' },
];

const WorkAs = [
    { label: 'Software Engineer', value: '1' },
    { label: 'Doctor', value: '2' },
    { label: 'Teacher', value: '3' },
    { label: 'Business Owner', value: '4' },
    { label: 'Lawyer', value: '5' },
    { label: 'Accountant', value: '6' },
    { label: 'Engineer (Non-Software)', value: '7' },
    { label: 'Marketing Professional', value: '8' },
    { label: 'Other', value: '9' },
];

const CompanyNames = [
    { label: 'Google', value: '1' },
    { label: 'Microsoft', value: '2' },
    { label: 'Amazon', value: '3' },
    { label: 'Apple', value: '4' },
    { label: 'Meta (Facebook)', value: '5' },
    { label: 'Tesla', value: '6' },
    { label: 'TCS', value: '7' },
    { label: 'Infosys', value: '8' },
    { label: 'Other', value: '9' },
];

export {
    Stats,
    Cities,
    Communities,
    MaritalStatus,
    Height,
    Diet,
    HighestQualification,
    CollegeAttended,
    MobileNumberCountryCodes,
    AnnualIncome,
    WorkWith,
    WorkAs,
    CompanyNames,
};
