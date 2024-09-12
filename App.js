import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/Siddhartha Bank_Logo_English_Tag line.jpg';
import './App.css';

// Home Component
import homeImage from './assets/HD-wallpaper-gautam-buddha-tree-background-siddhartha-gautama-lord.jpg';

const Home = () => (
  <Container className="mt-5 home-page">
    <div className="home-content d-flex align-items-center">
      <div className="home-image">
        <img src={homeImage} alt="Bank Image" className="img-fluid" />
      </div>
      <div className="home-text ms-4">
        <h2>Welcome to Siddhartha Bank</h2>
        <p className="lead">Your trusted partner in managing your finances efficiently and securely. At Siddhartha Bank, we offer a comprehensive range of banking services tailored to meet your needs, whether personal or business.</p>
        
        <div className="text-center">
          <Button variant="primary" size="lg" className="me-2">Learn More</Button>
          <Button variant="outline-primary" size="lg">Get Started</Button>
        </div>

        <hr className="my-4" />

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h4>Personal Banking</h4>
            <p>Manage your personal finances with ease. From savings accounts to loans, we have solutions to help you achieve your financial goals.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Business Banking</h4>
            <p>Empower your business with our specialized banking services. We provide business accounts, loans, and other financial tools to support your growth.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Customer Support</h4>
            <p>Our dedicated support team is here to assist you with any queries or issues. We ensure that your banking experience is smooth and hassle-free.</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

const About = () => (
  <Container className="mt-5 about-page">
    <h2 className="text-center mb-4">About Us</h2>
    <p className="lead text-center">At Siddhartha Bank, we are committed to providing our customers with exceptional banking services and products. Founded in 1995, our mission has always been to deliver reliable, secure, and innovative banking solutions tailored to your financial needs.</p>

    <div className="row text-center">
      <div className="col-md-6 mb-4">
        <h4>Our Mission</h4>
        <p>To empower individuals and businesses with innovative financial solutions that drive growth and prosperity. We strive to exceed expectations through dedication, integrity, and customer focus.</p>
      </div>
      <div className="col-md-6 mb-4">
        <h4>Our Values</h4>
        <ul className="list-unstyled">
          <li><strong>Integrity:</strong> We act with honesty and transparency.</li>
          <li><strong>Excellence:</strong> We deliver superior service and solutions.</li>
          <li><strong>Innovation:</strong> We embrace change and continuously improve.</li>
          <li><strong>Customer-Centric:</strong> We prioritize the needs and satisfaction of our customers.</li>
        </ul>
      </div>
    </div>
    
    <hr className="my-4" />
    
    <div className="text-center">
      <h4>Contact Us</h4>
      <p>For any inquiries or assistance, please reach out to us at <a href="mailto:support@yourbank.com">support@yourbank.com</a> or call us at (123) 456-7890.</p>
    </div>
  </Container>
);

// Login Component
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/transaction'); // Redirect to the transaction page after login
  };

  return (
    <Container className="mt-5">
      <h2>Login Page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

// Signup Component
const Signup = () => (
  <Container className="mt-5">
    <h2>Signup Page</h2>
    <p>Create a new account for your banking services.</p>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>
      <Button variant="primary" type="submit">Sign Up</Button>
    </Form>
  </Container>
);

// Logout Component
const Logout = () => (
  <Container className="mt-5">
    <h2>Logout Page</h2>
    <p>You have been logged out successfully.</p>
  </Container>
);

const Transaction = ({ transactions }) => (
  <Container className="mt-5">
    {transactions.length > 0 ? (
      <>
        <h2>Transaction History</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Current Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.type}</td>
                <td>{transaction.accountNumber}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currentBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <p>No transactions to display.</p>
    )}
    <Button variant="primary" as={Link} to="/deposit" className="me-2">Deposit</Button>
    <Button variant="secondary" as={Link} to="/withdraw">Withdraw</Button>
  </Container>
);


// Deposit Component
const Deposit = ({ transactions, setTransactions, currentBalance, setCurrentBalance }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDeposit = () => {
    const newBalance = currentBalance + parseFloat(amount);
    const newTransaction = {
      type: 'Deposit',
      accountNumber,
      amount,
      currentBalance: newBalance,
    };
    setTransactions([...transactions, newTransaction]);
    setCurrentBalance(newBalance);
    setAccountNumber('');
    setAmount('');
    navigate('/transaction'); // Redirect to transaction page after deposit
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
  };

  return (
    <Container className="mt-5">
      <h2>Deposit</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleDeposit} className="me-2">Deposit</Button>
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
      </Form>
    </Container>
  );
};

// Withdraw Component
const Withdraw = ({ transactions, setTransactions, currentBalance, setCurrentBalance }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = () => {
    if (parseFloat(amount) > currentBalance) {
      alert('Insufficient balance');
      return;
    }
    const newBalance = currentBalance - parseFloat(amount);
    const newTransaction = {
      type: 'Withdraw',
      accountNumber,
      amount,
      currentBalance: newBalance,
    };
    setTransactions([...transactions, newTransaction]);
    setCurrentBalance(newBalance);
    setAccountNumber('');
    setAmount('');
    navigate('/transaction'); // Redirect to transaction page after withdrawal
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
  };

  return (
    <Container className="mt-5">
      <h2>Withdraw</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleWithdraw} className="me-2">Withdraw</Button>
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
      </Form>
    </Container>
  );
};


// App Component
function App() {
  const [transactions, setTransactions] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);

  return (
    <Router>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Bank Logo" />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>

          <Nav className="me-auto">
            <NavDropdown title="Personal" id="nav-dropdown-personal">
              <NavDropdown.Item as={Link} to="/personal-accounts">Bank Accounts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/credit-cards">Credit Cards</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Business" id="nav-dropdown-business">
              <NavDropdown.Item as={Link} to="/business-accounts">Bank Accounts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loans">Loans</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Private Wealth" id="nav-dropdown-wealth">
              <NavDropdown.Item as={Link} to="/investing">Investing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insurance">Insurance</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex me-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          <Nav className="me-2">
            <Nav.Link href="#">CA</Nav.Link>
            <NavDropdown title="EN" id="nav-dropdown-lang">
              <NavDropdown.Item href="#">FR</NavDropdown.Item>
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="primary" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            Sign In
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/transaction" element={<Transaction transactions={transactions} />} />
          <Route path="/deposit" element={<Deposit transactions={transactions} setTransactions={setTransactions} currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} />} />
          <Route path="/withdraw" element={<Withdraw transactions={transactions} setTransactions={setTransactions} currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
