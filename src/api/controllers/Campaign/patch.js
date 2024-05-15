import User from "../../../../models/campaign";

const editCampaign = async (req, res) => {
  const { id } = req.params;
  const {
    redSocial,
    ubicacion,
    isSpecialDate,
    content,
    discount,
    // imputs que no necesita el prompt
    formatType,
    publicationTypes,
  } = req.body;

  await User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        ...(redSocial && { redSocial }),
        ...(ubicacion && { ubicacion }),
        ...(isSpecialDate && { isSpecialDate }),
        ...(content && { content }),
        ...(discount && { discount }),
        // imputs que no necesita el prompt
        ...(formatType && { formatType }),
        ...(publicationTypes && { publicationTypes }),
      },
    }
  )
    .then((data) => res.status(200).json(data))
    .catch((error) =>
      res.status(400).json({ message: "Your request gives error" })
    );
};

export default editCampaign;
