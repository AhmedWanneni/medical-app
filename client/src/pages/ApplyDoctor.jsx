
import DoctorForm from "../components/DoctorForm";
import Layout from "../components/Layout";

const ApplyDoctor = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 mt-4 ml-[12px] text-[#00BDA9]">Apply Doctor</h1>
      <DoctorForm /> 
    </Layout>
  );
}

export default ApplyDoctor;
