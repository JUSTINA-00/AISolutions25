import React, { useState } from 'react';
import './StudentDetailsForm.css';
function StudentDetailsForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        preferredName: '',
        pronouns: '',
        dateOfBirth: '',
        currentSchool: '',
        gradeLevel: '',
        diagnosis: '',
        learningStyle: '',
        accommodations: '',
        challenges: '',
        interests: '',
        hobbies: '',
        workPreference: '',
        goals: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Details submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required /><br />
            <input type="text" name="preferredName" placeholder="Preferred Name (Optional)" value={formData.preferredName} onChange={handleChange} /><br />
            <input type="text" name="pronouns" placeholder="Pronouns (e.g., he/him, they/them)" value={formData.pronouns} onChange={handleChange} /><br />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required /><br />
            <input type="text" name="currentSchool" placeholder="Current School" value={formData.currentSchool} onChange={handleChange} required /><br />
            <input type="text" name="gradeLevel" placeholder="Grade Level" value={formData.gradeLevel} onChange={handleChange} required /><br />
            
            <select name="diagnosis" value={formData.diagnosis} onChange={handleChange} required>
                <option value="">Do you have a formal diagnosis?</option>
                <option value="adhd">ADHD</option>
                <option value="autism">Autism</option>
                <option value="dyslexia">Dyslexia</option>
                <option value="other">Other</option>
                <option value="prefer_not_say">Prefer not to say</option>
            </select><br />
            
            <select name="learningStyle" value={formData.learningStyle} onChange={handleChange} required>
                <option value="">How do you best learn?</option>
                <option value="reading">Reading/Writing</option>
                <option value="listening">Listening</option>
                <option value="visual">Visual Aids</option>
                <option value="hands_on">Hands-on Activities</option>
                <option value="discussion">Discussion-Based Learning</option>
            </select><br />
            
            <input type="text" name="accommodations" placeholder="Accommodations Needed (e.g., extra time, quiet space)" value={formData.accommodations} onChange={handleChange} /><br />
            <input type="text" name="challenges" placeholder="Challenges Faced in School" value={formData.challenges} onChange={handleChange} /><br />
            <input type="text" name="interests" placeholder="Subjects of Interest" value={formData.interests} onChange={handleChange} required /><br />
            <input type="text" name="hobbies" placeholder="Hobbies or Special Interests" value={formData.hobbies} onChange={handleChange} /><br />
            
            <select name="workPreference" value={formData.workPreference} onChange={handleChange} required>
                <option value="">Do you prefer working alone or in groups?</option>
                <option value="alone">Alone</option>
                <option value="small_groups">Small Groups</option>
                <option value="mixed">Mix of Both</option>
            </select><br />
            
            <textarea name="goals" placeholder="What do you hope to achieve in this school?" value={formData.goals} onChange={handleChange} required /><br />
            <textarea name="additionalInfo" placeholder="Anything else you'd like us to know?" value={formData.additionalInfo} onChange={handleChange} /><br />
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default StudentDetailsForm;
