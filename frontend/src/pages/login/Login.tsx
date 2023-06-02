import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchParams } from 'codeforlife/lib/esm/helpers';

import { paths } from '../../app/router';
import BasePage from '../../pages/BasePage';
import PageSection from '../../components/PageSection';
import BaseForm from './BaseForm';
import TeacherForm from './TeacherForm';
import StudentForm from './StudentForm';
import IndependentForm from './IndependentForm';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const userTypes = ['teacher', 'student', 'independent'] as const;
  const params = SearchParams.get<{
    userType: typeof userTypes[number];
  }>({
    userType: { validate: SearchParams.validate.inOptions(userTypes) }
  });

  React.useEffect(() => {
    if (params === null) {
      navigate(paths.internalServerError);
    }
  }, []);

  if (params === null) return <></>;

  let form: React.ReactElement<typeof BaseForm>;
  switch (params.userType) {
    case 'teacher':
      form = <TeacherForm />;
      break;
    case 'student':
      form = <StudentForm />;
      break;
    case 'independent':
      form = <IndependentForm />;
      break;
  }

  return (
    <BasePage>
      <PageSection maxWidth='md'>
        {form}
      </PageSection>
    </BasePage>
  );
};

export default Login;
