import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        medicines: [{
            name: {
                type: String,
                required: true
            },
            dosage: {
                type: String,
                required: true
            },
    }],
    }, { timestamps: true }
)



export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)