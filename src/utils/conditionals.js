const isSuccess = resource => {
  return (
    isEmpty(resource.error) && !isEmpty(resource.data) && !resource.isRequesting
  );
};

export {
	isSuccess
}