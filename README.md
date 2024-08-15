# HL7 FHIR-based Healthcare System

Welcome to the **HL7 FHIR-based Healthcare System** repository. This project is a comprehensive healthcare management platform designed to facilitate efficient patient care and streamline communication between healthcare providers and patients, leveraging the power of the HL7 FHIR standard.

## Live Demo

Check out the live application [here](https://pf-ohs.vercel.app/).

## Project Motivation

The PF-OHS was conceived with the vision of revolutionizing healthcare management by offering a patient-centered approach. The platform aims to reduce the administrative burden on healthcare providers, enhance patient engagement, and improve the overall quality of care. Our goal is to provide a seamless and intuitive experience for both practitioners and patients.

## Technologies Used

### Frontend

- **Next.js**: We use Next.js for its powerful features like server-side rendering and static site generation, which enhance the performance and SEO of the application.
- **React**: The foundation of our user interface, React allows us to build reusable and dynamic components, ensuring a smooth user experience.
- **Zod**: Zod is employed for schema validation in the frontend forms, ensuring that all data conforms to expected formats before submission.

### Backend

- **Google Cloud Healthcare API**: Our application integrates with Google Cloud Healthcare API to securely manage and store healthcare data. This API provides a robust solution for handling sensitive health information.

### HL7 FHIR Standard

The **Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR)** standard is at the core of our system. FHIR enables the seamless exchange of healthcare information between different systems, ensuring that patient data is interoperable and accessible across various platforms. By adhering to the FHIR standard, our system supports:

- **Interoperability**: Allowing different healthcare systems to communicate effectively, reducing the complexity of healthcare data exchange.
- **Scalability**: Providing a flexible framework that can be extended to meet the evolving needs of healthcare providers and patients.
- **Security**: Ensuring that patient data is securely managed and complies with industry standards and regulations.

### Why Zod?

When working with FHIR resources, data validation is crucial to ensure that the information conforms to the complex and structured standards defined by FHIR. **Zod** is a powerful schema declaration and validation library that offers several advantages:

- **Type Safety**: Zod provides strong typing support, which ensures that the data conforms to the expected FHIR resource structures. This helps catch errors during development, leading to more reliable and maintainable code.
- **Composability**: Zod schemas can be easily composed and reused, which is particularly useful when dealing with nested and complex FHIR resources.
- **Runtime Validation**: Unlike TypeScript, which only offers compile-time type checking, Zod validates data at runtime. This is critical in scenarios where data might come from external sources (e.g., user input, API responses) and needs to be validated before being processed or stored.
- **Ease of Use**: Zod’s API is intuitive and integrates seamlessly with TypeScript, making it an excellent choice for developers familiar with modern JavaScript and TypeScript practices.

## System Architecture

The **Healthcare System** is composed of several interconnected modules, each responsible for managing different aspects of healthcare operations. The diagram below provides a visual representation of these modules and their key functionalities.

<img width="1508" alt="System Architecture Diagram" src="https://github.com/user-attachments/assets/5fe93712-ae56-4803-af84-fab590cfd072">

### Module Overview

- **Healthcare System (Central Node)**: Integrates all modules, ensuring smooth operation and data flow between them.
- **Gestor de Historia Clínica (Medical Record Manager)**: Manages medical records.
- **Gestor de Examen (Examination Manager)**: Handles medical examination processes.
- **Gestor de Empresas (Company Manager)**: Oversees company-related information.
- **Gestor de Recepcion (Reception Manager)**: Manages reception-related tasks.
- **Gestor de Usuarios (User Manager)**: Controls user authentication and information.

## Logical Architecture
<img width="500" alt="Logical Architecture Diagram" src="https://github.com/user-attachments/assets/4641cdb6-18f5-4ddc-b7ee-74807fff682d">

## Role-Based Components

<img width="1508" alt="Role-Based Components Diagram" src="https://github.com/user-attachments/assets/9984cf6a-68e6-489c-8e69-908cc6a2f602">

## Features

### Authentication

The authentication feature ensures that only authorized healthcare providers can access the platform. It supports secure login, session management, and protects sensitive patient information, adhering to industry standards like HIPAA for healthcare data security.

<img width="1508" alt="Login Page" src="https://github.com/user-attachments/assets/aeb042c7-692a-45d8-98cb-7d325e418821">

### Welcome Page

The Welcome Page provides a personalized dashboard that gives users an overview of their tasks, quick access to different sections of the application, and important notifications. This helps users navigate the system efficiently and stay updated with their responsibilities.

<img width="1508" alt="Welcome Page" src="https://github.com/user-attachments/assets/661ce9ef-b783-4a47-ac09-a88d35973f2b">

### Patient Management

- **Overview**:
  The Patient Overview page displays a list of all patients registered in the system. It provides essential details at a glance, such as patient name, ID, and last encounter date, allowing healthcare providers to quickly access and manage patient information.

  <img width="1508" alt="Patient Overview" src="https://github.com/user-attachments/assets/ff3b5635-480b-4cc3-a02f-7959b5cdc0c8">

- **Details**:
  The Patient Details page gives a comprehensive view of individual patient records, including demographic information, medical history, and encounter summaries. This detailed view helps providers make informed decisions based on accurate and up-to-date patient data.

  <img width="1508" alt="Patient Details" src="https://github.com/user-attachments/assets/f9037cac-9613-47c4-994b-37702eb8619e">

- **Form**:
  The Patient Form feature allows healthcare providers to add or update patient information. The form is validated using Zod to ensure all data entries conform to the required FHIR schema, reducing errors and maintaining data integrity.

  <img width="1508" alt="Patient Form" src="https://github.com/user-attachments/assets/3aaaecf9-459a-4b1b-9de1-c0d6560ace8f">

### Questionnaire Management

- **Overview**:
  The Questionnaire Overview page provides a list of all questionnaires that have been assigned to patients. It includes details like the questionnaire type, completion status, and associated patient, helping providers track patient engagement and gather valuable health information.

  <img width="1508" alt="Questionnaire Overview" src="https://github.com/user-attachments/assets/a96bd689-3c84-4ec0-a80e-ef74064c030f">

- **Form**:
  The Questionnaire Form enables healthcare providers to create or edit questionnaires. Zod is used here to validate that all questions and responses meet the expected formats, ensuring that the data collected is consistent and useful for patient care.

  <img width="1510" alt="Questionnaire Form" src="https://github.com/user-attachments/assets/b485e273-9c9f-458a-bd7b-b6a3e000a0cc">

### Organization Management

- **Overview**:
  The Organization Overview page lists all organizations associated with the healthcare system, providing a summary of their details and the ability to manage their information. This is particularly useful for large healthcare networks managing multiple facilities.

  <img width="1508" alt="Organization Overview" src="https://github.com/user-attachments/assets/04f4ea59-7c36-4bdf-9bd2-5876b1129df9">

- **Form**:
  The Organization Form feature allows administrators to add or update organization details. Using Zod for validation ensures that all organizational data, such as addresses and contact information, is accurate and adheres to the expected structure.

  <img width="1508" alt="Organization Form" src="https://github.com/user-attachments/assets/36daf686-3e80-4f97-afc3-eb3d75f02ff0">

### Encounter Management

- **Overview**:
  The Encounter Overview page provides a chronological list of all patient encounters, offering quick access to encounter details, including diagnoses, procedures, and practitioner notes. This feature is essential for tracking patient progress and ensuring continuity of care.

  <img width="1508" alt="Encounter Overview" src="https://github.com/user-attachments/assets/182a6109-bb9c-49bd-b7c9-fd90a7023cdb">

- **Questionnaires Response**:
  This feature allows healthcare providers to review responses from patient-completed questionnaires within the context of an encounter. It helps in assessing patient conditions and tailoring care plans accordingly.

  <img width="1508" alt="Encounter - Questionnaires Response" src="https://github.com/user-attachments/assets/fd5ce99a-9979-42d9-8aea-2c08b1995c32">

### Practitioners Management

- **Overview**:
  The Practitioners Overview page lists all healthcare providers registered within the system, including their roles, specialties, and contact information

. This feature facilitates the management of healthcare teams and ensures that the right practitioners are assigned to the right patients.

  <img width="1506" alt="Practitioners Overview" src="https://github.com/user-attachments/assets/cf6e8ff6-eb27-4808-90a9-769f6c6ba6a3">

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SJanna/pf_ohs.git
   ```

2. **Install dependencies**:
   ```bash
   cd pf_ohs
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root of the project.
   - Add your Google Cloud Healthcare API credentials and other necessary environment variables.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Running Tests**:
   ```bash
   npm run test
   ```

## Contributing

We welcome contributions to improve the platform. Please feel free to open issues or submit pull requests.
