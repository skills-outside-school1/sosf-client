import mongoose from "mongoose";

const EthicsReportSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email_address: { type: String, required: true },
    phone_number: { type: String, required: true },
    country_residence: { type: String, required: true },
    country_where_violation_ocurred: { type: String, required: true },
    location_of_incident: { type: String, required: true },
    nature_of_the_violation: { type: String, required: true },
    description_of_incident: { type: String, required: true },
    relationship_person_involved: { type: String, required: true },
    code_violated: { type: String, required: true },
    date_of_incident: { type: String, required: true },
    previously_reported: { type: String, required: true },
    additional_information: { type: String },
    anonymous_concent: { type: String, required: true },
    other_value: { type: String },
  },
  { timestamps: true }
);

//  Avoid model overwrite in dev
export default mongoose.models.EthicsReport ||
  mongoose.model("EthicsReport", EthicsReportSchema);
