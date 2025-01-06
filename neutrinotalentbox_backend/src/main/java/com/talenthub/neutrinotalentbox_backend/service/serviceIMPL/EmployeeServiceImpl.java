package com.talenthub.neutrinotalentbox_backend.service.serviceIMPL;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import com.talenthub.neutrinotalentbox_backend.reposotory.EmployeeRepository;
import com.talenthub.neutrinotalentbox_backend.service.EmailService;
import com.talenthub.neutrinotalentbox_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmailService emailService;

    // Temporary storage for OTPs
    private final Map<String, String> otpStorage = new HashMap<>();

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public boolean sendOtpToEmail(String email) {
        Optional<Employee> employeeOptional = employeeRepository.findByEmail(email);

        if (employeeOptional.isPresent()) {
            String otp = generateOtp();
            otpStorage.put(email, otp); // Store OTP for verification
            emailService.sendOtpEmail(email, otp);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean verifyOtp(String email, String otp) {
        if (otpStorage.containsKey(email)) {
            String storedOtp = otpStorage.get(email);
            if (storedOtp.equals(otp)) {
                otpStorage.remove(email);  // Remove OTP after successful verification
                return true;
            }
        }
        return false;
    }


    private String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    @Override
    public boolean logout(String email) {
        // Check if OTP exists for the email
        if (otpStorage.containsKey(email)) {
            otpStorage.remove(email); // Remove the OTP to expire the session
            return true;
        }
        return false; // No OTP session to expire
    }
}
